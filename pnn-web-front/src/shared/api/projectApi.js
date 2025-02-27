import axios from 'axios';

export const projectApi = {
  getProjects: async () => {
    try {
      const response = await axios.get(
        'https://port-0-pnn-web-backend-m5m6xltec2c87be9.sel4.cloudtype.app/project/get'
      );
      return response.data.map((project) => ({
        id: project.id,
        title: project.title,
        subTitle: project.sub_title,
        category: project.project_category,
        tag: project.project_tag,
        type: project.project_type,
        imageUrl: project.image,
        link: project.link,
      }));
    } catch (error) {
      console.error('프로젝트 데이터를 불러오는 중 오류 발생:', error);
      return [];
    }
  },

  getProjectDetail: async (id) => {
    const projects = await projectApi.getProjects();
    return projects.find((project) => project.id === parseInt(id));
  },

  uploadProject: async (projectData) => {
    try {
      const response = await axios.post(
        'https://port-0-pnn-web-backend-m5m6xltec2c87be9.sel4.cloudtype.app/project/upload',
        projectData
      );
      return response.data;
    } catch (error) {
      console.error('프로젝트 업로드 중 오류 발생:', error);
    }
  },
};
