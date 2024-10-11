export const fetchProjects = () => {
  const data = fetch(`./db/projects.json`).then(res => {
    return res.json();
  });
  return data;
};
