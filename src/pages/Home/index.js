function Home() {
  const getIssues = require('./get-issues.js')
  const getIssuesFunc = async () => {
    const issues = await getIssues()
    return issues
  }
  getIssuesFunc()

  return <h1>home page</h1>
}

export default Home
