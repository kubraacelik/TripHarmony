# TripHarmony
### Trip Harmony is a modern web application that allows users to make tour reservations, review tour details and add reviews. The project aims to provide an effective solution in terms of both performance and usability by combining a user-friendly interface with a powerful backend infrastructure.

### This system securely stores user information using encryption with bcryptjs and token management with jsonwebtoken (JWT) for secure user registration and login. User data is transmitted to clients by filtering only the required fields. New tours can be added, existing tours can be updated or deleted. Tours are presented to the user with detailed information and users are allowed to add comments for each tour. Comments are dynamically integrated into the relevant tour and updated in real time. In addition, booking data is securely stored in MongoDB and listing operations can be performed when necessary. Tour and user lists are presented faster and more efficiently with paging support, which improves system performance.

### On the frontend side, React.js was used for a modern and dynamic user interface design. React Router DOM was preferred to provide fast and efficient routing within the application. On the backend side, Node.js and Express.js, a fast and lightweight framework, were used to create RESTful APIs. MongoDB was preferred for database management. We used bcryptjs to securely encrypt user passwords and jsonwebtoken for authentication. We also used additional libraries and tools such as Mongoose for easy data modeling with MongoDB, dotenv for managing environment variables and cookie-parser for securely managing user sessions.

![Ekran görüntüsü 2024-12-16 135031](https://github.com/user-attachments/assets/4034fdda-ad6e-451e-9f2b-17cf74e5690b)
![Ekran görüntüsü 2024-12-16 135045](https://github.com/user-attachments/assets/f9da77e1-608b-4cbe-8b4e-af9b6aa8ad9c)
![Ekran görüntüsü 2024-12-16 135124](https://github.com/user-attachments/assets/90b35152-018f-45f3-9c0a-6dec5852c605)
![Ekran görüntüsü 2024-12-16 135729](https://github.com/user-attachments/assets/2e7f16ce-6bd0-4363-9a8a-53a10e40613a)
![Ekran görüntüsü 2024-12-16 135140](https://github.com/user-attachments/assets/ecffff67-7a0b-41d6-baec-b78476c2e9c4)
![Ekran görüntüsü 2024-12-16 135802](https://github.com/user-attachments/assets/5ad77a22-abb9-4323-99f5-f531ede6ba38)

### When filtering:
![Ekran görüntüsü 2024-12-16 135422](https://github.com/user-attachments/assets/272ce8e4-18f0-4a6e-9489-ec04d6f75adb)
![Ekran görüntüsü 2024-12-16 135447](https://github.com/user-attachments/assets/3b884d50-6bbc-4e5b-83d4-3afd121659d2)

### Tour details and comment sections:
![Ekran görüntüsü 2024-12-16 135521](https://github.com/user-attachments/assets/bf83bd32-b8c2-4584-bc12-27111bcc322f)
![Ekran görüntüsü 2024-12-16 135534](https://github.com/user-attachments/assets/eb25c0db-cbc4-47b8-b69d-65687c39c22c)

## Run the Application

Start the back-end server:

```bash
cd backend
npm run start-dev
```
Start the front-end server:

```bash
cd frontend
npm start
```
