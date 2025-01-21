const resopnse = await fetch(
    `${process.env.REACT_APP_API_URL}/api/workouts/${workout._id}`,
)