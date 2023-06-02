# rcts-summerinternship-task

# REDA-REPRESENTATION OF DATA

## Introduction

*This project aims to develop a data ingestion, analytics, and visualization system. The system allows users to input data through a form or an Excel sheet frontend built with React. The entered data is stored in a database for further processing and analysis. A Python script is utilized to perform analytics on the data, and the results are stored back in the database. Finally, the frontend visualizes both the raw data and the output of the Python script*


##  System Architecture

*The system consists of the following components:*

- **FRONTEND:** A React-based user interface that provides a form for data input and facilitates Excel sheet uploads. It communicates with the backend via API calls

- **BACKEND:** An API server built using a Python framework (e.g., Flask or Django) that handles data ingestion, storage, analytics, and retrieval. It interacts with the frontend and the database.

- **Database:** A storage system MongoDB used to persist the ingested data, analytics output, and other relevant information.

- **Python Script:** A script written in Python that performs the desired analytics on the ingested data. It is invoked through an API call from the backend.

## System Workflow

1. **Data Ingestion:** Users can input data using either the provided form or by uploading an Excel sheet via the frontend. The frontend sends the data to the backend through API calls.

2. **Data Storage:** The backend receives the data from the frontend and stores it in the database.
    - If the data is sent through the form, it is directly stored in the database.
    - If the data is sent via an Excel sheet, the backend extracts the necessary information and stores  it in the database.
    
3. **Analytics Processing:** The backend triggers the Python script to perform analytics on the stored    data. The script is executed through an API call.
    -The Python script receives the required data from the database and performs the desired analytics tasks.
    
4. **Output Storage:**The results of the analytics script are stored in the database by the backend.
5. 
6. **Data Visualization:**The frontend retrieves the stored raw data and analytics output from the backend and visualizes them.
    -The raw data is presented using suitable charts, tables, or graphs to provide an overview.


## Technologies Used

- FRONTEND:
    - React (JavaScript framework for building the user interface)
    - HTML, CSS, and JavaScript for designing and styling the frontend
- BACKEND:
    - Python (programming language for the backend logic)
    - Flask
    - MongoDB
- Analytics:
    - Python (for scripting and performing analytics tasks)
    - Relevant Python libraries for data analysis and visualization (Pandas)

## CONCLUSION
  The implemented data ingestion, analytics, and visualization system provide users with a convenient way to input data, perform analytics, and visualize the results. The frontend allows for data input through a form or Excel sheet uploads, while the backend manages the storage of data in the database. The Python script handles the analytics tasks, and the results are stored back in the database. Finally, the frontend presents the data and analytics output in a visually appealing manner, enabling users to gain insights from the processed information





