FROM maven:3.8.4-openjdk-17-slim AS build
WORKDIR /app

COPY ./server/Elongation/pom.xml .
COPY ./server/Elongation/projects/pom.xml projects/
COPY ./server/Elongation/projects/src projects/src

RUN mvn clean install -DskipTests

WORKDIR /app/projects
RUN mvn -o compile

FROM openjdk:17-jdk-slim
WORKDIR /app
COPY --from=build /app/projects/target/*.jar /app/app.jar
ENTRYPOINT ["java", "-jar", "/app/app.jar"]