# Stage 1: Build Angular app

FROM node:16 as angular-build
EXPOSE 44475
WORKDIR /app
COPY ClientApp/ ./
RUN npm install
#CMD ["npm", "run", "start:debug"]
RUN npm run build
# Stage 2: Build .NET Core app
EXPOSE 52167
EXPOSE 7214
EXPOSE 5286
FROM mcr.microsoft.com/dotnet/sdk:8.0 as dotnet-build
WORKDIR /src
RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y nodejs \
    npm                     
COPY ["Conbent.WebApp.csproj", "./"]
RUN dotnet restore "./Conbent.WebApp.csproj"
COPY / .
WORKDIR "/src/."
RUN dotnet publish "Conbent.WebApp.csproj" -c Debug -o /app/publish

# Stage 3: Assemble final Docker image
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=dotnet-build /app/publish .
COPY --from=angular-build /app/dist /app/dist
ENTRYPOINT ["dotnet", "Conbent.WebApp.dll"]