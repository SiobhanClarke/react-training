# GitHub Directory

## User Story

As a user I want to view a list of GitHub directories along with some useful information about each directory.

## Acceptance Criteria

- Application should contain a title `"GitHub Directory"` and a sub-title of `"A list of all your GitHub repositories"`.
- Application should render a message `"You have no GitHub repositories."` for an empty list of repositories.
- Application should render all the repositories if the list is not empty in a responsive manner.
- Each repository should display the following data:
  - name of the repository
  - link to the repository on GitHub
  - owner's username
  - number of stars (default 0)
  - number of watchers (default 0)
  - description (optional)
  - topics (optional)

## Mock Data

The mock data for the repos can be found [here](../../../../playground/src/mockRepos.json). Use this mock data to render multiple GitHub repositories.
