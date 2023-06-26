FROM eclipse-temurin:17-jdk-alpine

WORKDIR /app
ADD build/libs/backend-*.jar /app/brettbutler-backend.jar

ENTRYPOINT ["java", "-jar", "/app/brettbutler-backend.jar"]
