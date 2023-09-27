<svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
  <!-- Define the text to be animated -->
  <text x="10" y="100" font-family="Arial" font-size="24" fill="black" id="welcome-text">
    Welcome to Log Digestor!
  </text>
  
  <!-- Define the animation -->
  <animate
    xlink:href="#welcome-text"
    attributeName="opacity"
    from="0"
    to="1"
    dur="2s"
    begin="0s"
    repeatCount="indefinite"
  />
</svg>

# Log Digestor

**Log Digestor** is a Node.js TypeScript CLI application for abstracting API log data.

## Libraries Used

- **commander**: Used for creating CLI options and command lines.
- **figlet**: Used to create ASCII art for CLI text.
- **typescript**: Used to add fixed data types to variables, parameters, etc.

## Instructions to Run the App

Follow these instructions to run the application:

1. Clone the repository to your system:

   ```bash
   git clone https://github.com/premkumar-555/unomok_cli.git
   ```
2. Change directory to the project folder::

   ```bash
   cd unomok_cli/
   ```
3. Install the necessary dependencies:

   ```bash
   npm install
   ```
4. To get information about the application and learn about the available command lines, use:

   ```bash
   log -h
   ```
   
5. The following command lines are available for their respective tasks:

- To print which endpoint is called how many times:
 ```bash
 log -epc <path\to\the\logfile>
   ```
- To print how many API calls were made on a per-minute basis:
 ```bash
 log -pmc <path\to\the\logfile>
   ```
- To print how many API calls there are in total for each HTTP status code:
 ```bash
 log -scc <path\to\the\logfile>
   ```

