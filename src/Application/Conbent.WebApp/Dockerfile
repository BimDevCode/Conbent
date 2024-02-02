# # Stage 1: Build Angular app
# FROM node:17 as angular-build
# EXPOSE 4200
# WORKDIR /app
# COPY Client/ ./
# RUN npm install
# RUN npm run build
#CMD ["npm", "run", "start:debug"]
# Stage 2: Build .NET Core app

# FROM mcr.microsoft.com/dotnet/sdk:8.0 as dotnet-build
# EXPOSE 7214
# EXPOSE 5286
# EXPOSE 4200
# WORKDIR /src
# RUN apt-get update && apt-get upgrade -y && \
#     apt-get install -y nodejs \
#     npm                     
# COPY ["Conbent.WebApp.csproj", "./"]
# RUN dotnet restore "./Conbent.WebApp.csproj"
# COPY / .
# WORKDIR "/src/."
# RUN dotnet publish "Conbent.WebApp.csproj" -c Debug -o /src/publish

# # # Stage 3: Assemble final Docker image
# # FROM mcr.microsoft.com/dotnet/aspnet:8.0
# # WORKDIR /app
# # COPY --from=dotnet-build /app/publish .
# # COPY --from=angular-build /app/dist /app/dist
# ENTRYPOINT ["dotnet", "Conbent.WebApp.dll"]

# Stage 0: Define main image
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
USER app
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

# Stage 1: Define sdk with preinstalled node.js
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS with-node
RUN apt-get update
RUN apt-get install curl
RUN curl -sL https://deb.nodesource.com/setup_20.x | bash
RUN apt-get -y install nodejs
RUN npm install -g @angular/cli

FROM with-node AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["Conbent.WebApp.csproj", "./"]

RUN dotnet restore "./Conbent.WebApp.csproj"
COPY . .
WORKDIR "/src/Conbent.WebApp"
RUN dotnet build "./Conbent.WebApp.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Debug
RUN dotnet publish "Conbent.WebApp.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Conbent.WebApp.dll"]
