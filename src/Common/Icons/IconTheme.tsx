enum IconTheme {
  antd = "antd",
  fc = "fc",
  bi = "bi",
}

const IconThemeOptions = () => {
  return Object.keys(IconTheme).map((theme) => {
    return { label: theme, value: theme };
  });
};

export { IconTheme, IconThemeOptions };
