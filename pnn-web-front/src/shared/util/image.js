const images = {
  c: {
    path: "src/assets/icons/framworks/c_icon.png",
    color: "#BFDEFF",
  },
  "c#": {
    path: "src/assets/icons/framworks/cnet_icon.png",
    color: "#A179DC",
  },
  "c++": {
    path: "src/assets/icons/framworks/c++_icon.png",
    color: "#88CCFF",
  },
  flutter: {
    path: "src/assets/icons/framworks/flutter_icon.png",
    color: "#9ADEFD",
  },
  java: {
    path: "src/assets/icons/framworks/java_icon.png",
    color: "#ED9394",
  },
  javascript: {
    path: "src/assets/icons/framworks/javascript_icon.png",
    color: "#FEF28C",
  },
  python: {
    path: "src/assets/icons/framworks/python_icon.png",
    color: "#A2BDD4",
  },
  react: {
    path: "src/assets/icons/framworks/react_icon.png",
    color: "#B5DCE6",
  },
  reactnative: {
    path: "src/assets/icons/framworks/react_native_icon.png",
    color: "#A0EAFE",
  },
  spring: {
    path: "src/assets/icons/framworks/spring_icon.png",
    color: "#A5C797",
  },
  springboot: {
    path: "src/assets/icons/framworks/springboot_icon.png",
    color: "#B5F888",
  },
  unity: {
    path: "src/assets/icons/framworks/unity_icon.png",
    color: "#737572",
  },
  vue: {
    path: "src/assets/icons/framworks/vue_icon.png",
    color: "#A9FFD9",
  },
};
export const getImage = (v) => {
  const text = v.replace(" ", "").toLowerCase();
  return images[text];
};
