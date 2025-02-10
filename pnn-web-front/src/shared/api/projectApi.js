import axios from 'axios';

export const projectApi = {
  getProjects: async () => {
    try {
      const response = await axios.get(`https://port-0-pnn-web-backend-m5m6xltec2c87be9.sel4.cloudtype.app/project/get`, {});
      return response.data.map((project) => ({
        id: project.id,
        title: project.title,
        subTitle: project.sub_title,
        category: project.project_category,
        tag: project.project_tag,
        type: project.project_type,
        imageUrl: project.image,
      }));
    } catch {}
  },

  getProjectDetail: async (id) => {
    try {
      const response = await axios.get(`https://port-0-pnn-web-backend-m5m6xltec2c87be9.sel4.cloudtype.app/project/get`, {});
      const project = response.data.find(project => project.id === parseInt(id));

      return {
        id: project.id,
        title: project.title,
        subTitle: project.sub_title,
        imageUrl: project.image,
        category: project.project_category,
        type: project.project_type,
        tag: project.project_tag,
        link: project.link,
      };
    } catch {}
  },

  uploadProject: async (projectData) => {
    try {
      const response = await axios.post('https://port-0-pnn-web-backend-m5m6xltec2c87be9.sel4.cloudtype.app/project/upload', projectData);
      return response.data;
    } catch {}
  }
};