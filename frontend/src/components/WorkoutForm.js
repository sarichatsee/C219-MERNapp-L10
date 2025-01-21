const handleSubmit = async (e) => {
    e.preventDefault();
  
    console.log("Submitting workout...");
  
    const workout = { title, load, reps };
    console.log("Workout data:", workout);
  
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/workouts`, {
        method: "POST",
        body: JSON.stringify(workout),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      console.log("Response:", response);
  
      const json = await response.json();
  
      if (!response.ok) {
        console.log("Error response:", json);
        setError(json.error);
        setEmptyFields(json.emptyFields);
        return;
      }
  
      console.log("New workout added:", json);
  
      setTitle("");
      setLoad("");
      setReps("");
      setError(null);
      setEmptyFields([]);
      dispatch({ type: "CREATE_WORKOUT", payload: json });
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
  