const DynamicGreeting = () => {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone; // Get user's time zone
  const now = new Date().toLocaleString("en-US", { timeZone }); // Get the current time in the user's time zone
  const hours = new Date(now).getHours();

  const greeting =
    hours < 12
      ? "Good Morning"
      : hours < 18
      ? "Good Afternoon"
      : "Good Evening";

  return <h1>{greeting}, I'm Drew Gomez</h1>;
};

export default DynamicGreeting;
