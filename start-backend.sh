#!/bin/bash

# Banking App Backend Startup Script

echo "Starting Banking App Backend..."

# Navigate to backend directory
cd ../Banking-App 2>/dev/null || {
    echo "Backend not found. Cloning repository..."
    cd ..
    git clone https://github.com/Tommymuia/Banking-App.git
    cd Banking-App
}

# Check if Java is installed
if ! command -v java &> /dev/null; then
    echo "Java is not installed. Please install Java 17 or higher."
    exit 1
fi

# Check if Maven is installed
if ! command -v mvn &> /dev/null; then
    echo "Maven is not installed. Please install Maven."
    exit 1
fi

# Build and run
echo "Building the project..."
mvn clean install -DskipTests

echo "Starting the backend server..."
mvn spring-boot:run