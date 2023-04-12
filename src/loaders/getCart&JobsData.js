

export const jobsData = async () => {
    const jobsData = await fetch('jobs.json')
    const jobs = await jobsData.json()

    return { jobs }
}