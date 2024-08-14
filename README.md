# ElectionSeva

ElectionSeva is a comprehensive platform designed to serve both the Election Commission and voters, enhancing the efficiency of election operations and improving the voting experience.

## Features

### For Election Commission:
- **Real-Time Insights:** Get real-time data from voting stations, helping to monitor and manage the election process effectively.
- **Recommendation Scores:** Calculate recommendation scores based on critical factors such as emergency services availability and population density.
- **Resource Optimization:** Receive suggestions for optimal staff and booth numbers at each voting station, ensuring efficient resource allocation.

### For Voters:
- **Station Navigation:** Easily navigate to your assigned voting station with the help of our user-friendly interface.
- **Real-Time Queue Status:** Stay informed about the current queue status and estimated voting times at your station to plan your visit accordingly.

## Getting Started

### Prerequisites
- Node.js
- MySQL
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/ElectionSeva.git
   cd ElectionSeva
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up the database:**
   - Configure your MySQL database with the required tables.
   - Update the database connection details in the `index.js` file in the server directory.

4. **Run the application:**
   ```bash
   npm run dev
   ```

5. **Access the application:**
   - Open your browser and navigate to `http://localhost:3000` for the voter interface.
   - Access the Election Commission portal via `http://localhost:3000/election-login`.

## Usage

### Election Commission Portal
- Monitor live data from all voting stations.
- Review recommendations for staff and booth allocations.
- Make data-driven decisions to ensure smooth election operations.

### Voter Interface
- Check your assigned voting station.
- View real-time queue status and estimated waiting times.
- Plan your visit to the voting station efficiently.

## Contact

For any questions or feedback, please reach out to [kavan1357@gmail.com](mailto:kavan1357@gmail.com).
