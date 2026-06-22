declare module "*.css";

declare module "prismjs" {
  const Prism: {
    highlightAll: () => void;
  };

  export default Prism;
}

declare module "prismjs/components/*";
