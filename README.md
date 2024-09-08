## Resume Builder

A dynamic resume builder powered by GitHub data.

### Demo

Check out the live demo: [Resume Builder Demo](https://resume-builder-8r9.pages.dev/)

## Running Locally

To run this project on your local machine, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/m-eugen/resume-builder.git
   cd resume-builder
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Set up environment variables:

   - Rename `.env.example` file in the root directory to `.env`
   - Add the following variables:
     ```
     NEXT_PUBLIC_GITHUB_TOKEN=your_github_token
     ```

4. Start the development server:

   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`
