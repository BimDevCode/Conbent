FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
ENV ASPNETCORE_ENVIRONMENT=Development
ENV ASPNETCORE_HOSTINGSTARTUPASSEMBLIES=Microsoft.AspNetCore.SpaProxy
EXPOSE 8080
EXPOSE 8081

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS with-node
RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y nodejs \
    npm
RUN npm install -g @angular/cli

FROM with-node AS dotnetbuild
ARG BUILD_CONFIGURATION=Debug
WORKDIR 
COPY ["src/WebApp/Conbent.WebApp.csproj", "src/WebApp/"]
RUN dotnet restore "./src/WebApp/./Conbent.WebApp.csproj"
COPY . .
WORKDIR "/src/WebApp"
RUN dotnet build "./Conbent.WebApp.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM dotnetbuild AS build
WORKDIR "/src/Conbent.WebApp/Client"
RUN npm install
RUN ng build

FROM build AS publish
ARG BUILD_CONFIGURATION=Debug
WORKDIR "/src/Conbent.WebApp"
RUN dotnet publish "./Conbent.WebApp.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
ARG SpaRoot=Client
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Conbent.WebApp.dll"]