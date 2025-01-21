useEffect(() => {
    const fetchWorkouts = async () => {
        const response = await fetch(
            `${process.env.REACT_APP_API_URL}/api/workouts`
        )
    }
})