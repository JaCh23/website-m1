import "./styles.css";

export default function App() {
  // useState returns an array of the state variable, and the setter function
  // This is a destructuring assignment, see
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

  return (
    <div className="App">
      <header>
        <h1>HackerTeen</h1>

        <div class="navbar">
          <a href="#login">Login</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          <div class="dropdown">
            <button class="dropbtn">
              Resources
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="#">Chapter 1</a>
              <a href="#">Chapter 2</a>
              <a href="#">Chapter 3</a>
            </div>
          </div>
          <a href="#home">Home</a>
        </div>

        <div id="imagewrapper">
          <h2 class="center">
            One-stop platform to empower YOU with cybersecurity skills and
            knowledge to make better career decisions
          </h2>
        </div>

        <div id="imagewrapper">
          <div>
            <img
              src="https://3.bp.blogspot.com/-GQdXZYTeY80/WAsinlu3UaI/AAAAAAAAHpE/4VNvl3IVdW8IPCnHfvpHdbRYQ6dKlY-7wCLcB/s1600/Hacker%2BBackground%2B1.jpg"
              width="800"
              id="image"
            />
          </div>
          <div>
            <p class="center"> Igniting the passions of the next generation</p>
          </div>
        </div>

        <div style={{ display: "flex", flexFlow: "row nowrap" }}>
          <div className="HeaderBox">
            <h2 class="center">My Courses</h2>
            <p class="center"> Get back into where you last stopped!</p>
            <p class="center">
              {" "}
              Current course: <strong> Intro to Cryptography</strong>
            </p>
            <p class="center">
              {" "}
              Completion Progress: <strong>63%</strong>{" "}
            </p>

            <div class="center">
              <ul>
                {" "}
                Progress:
                <li> Encryption and Decryption </li>
                <li> Intro to Cyphers </li>
                <li>
                  {" "}
                  <mark>Authentication </mark>{" "}
                </li>
                <li> Secret Key and Public Key </li>
                <li> Algorithms: RSA, Hash Functions </li>
              </ul>
            </div>

            <button class="center">Continue</button>
          </div>

          <div className="HeaderBox">
            <h2 class="center">Progress Update</h2>
            <p class="center">
              Welcome back! You've been here for <strong>5</strong> concurrent
              days! Keep it up!
            </p>
            <p class="center"> Tasks To Do: </p>
          </div>
        </div>
      </header>

      <main>
        <div>
          <h2>Add Tasks</h2>
          <form>
            <label>
              Task:
              <input style={{ margin: "0 1rem" }} type="text" value={""} />
            </label>
            <input type="submit" value="Add" />
          </form>
        </div>

        <div>
          <h2>Task List</h2>
          <table style={{ margin: "0 auto", width: "100%" }}>
            <thead>
              <tr>
                <th>No.</th>
                <th>Task</th>
                <th>Completed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Brew my morning coffee</td>
                <td>
                  <input type="checkbox" checked={true} />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Attend Orbital mission control on React</td>
                <td>
                  <input type="checkbox" checked={true} />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Meet my Orbital project advisor</td>
                <td>
                  <input type="checkbox" checked={false} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
