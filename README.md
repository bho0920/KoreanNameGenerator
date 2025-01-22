# Korean Name Generator

This project demonstrates my ability to build and deploy a web application using AWS services. The Korean Name Generator allows users to randomly generate Korean names based on the selected gender (Male/Female). The app combines frontend web development with backend serverless infrastructure.

### **Tech Stack**
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: AWS Lambda, DynamoDB, API Gateway
- **Hosting**: S3 Bucket (Static Website)

### **Features**
1. **Random Korean Name Generation**:
   - Users can input a gender (Male/Female) to generate a Korean name using a serverless backend.
2. **Serverless Architecture**:
   - Built with AWS services to demonstrate a scalable and efficient deployment model.

### **How It Works**
1. **Frontend**:
   - Developed with HTML, CSS, and JavaScript.
   - JavaScript fetches names via an API based on the user's input.
2. **AWS Services**:
   - **S3 Bucket**:
     - Hosts the static website.
     - Configured with the necessary CORS policy for frontend-backend communication.
   - **DynamoDB**:
     - Two tables (`KoreanMaleNames` and `KoreanFemaleNames`) store name datasets.
   - **Lambda Function**:
     - Fetches a random name from DynamoDB based on the selected gender.
     - Written in Python with appropriate IAM roles for secure data access.
   - **API Gateway**:
     - Connects the frontend to the Lambda function via a simple GET endpoint.

### **Live Demo**
Visit the live project: [KoreanNameGenerator](http://koreannamegenerator.com.s3-website.ap-northeast-2.amazonaws.com/)

---

### **Future Improvements**
- Add more names for both genders.

---
