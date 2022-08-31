import { createEffect, createSignal } from "solid-js";

export function ThemeTogglerBasic() {
  const [theme, setTheme] = createSignal("light");
  const themes = ["light", "dark"];
  createEffect(() => {
    const root = document.documentElement;
    if (theme() === "light") {
      root.classList.remove("theme-dark");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.add("theme-dark");
      localStorage.setItem("theme", "dark");
    }
  });

  return (
    <div className="theme-toggle">
      {themes.map((themeType, themeIndex) => {
        const checked = themeType === theme();
        return (
          <label className={checked ? "pointer checked" : "pointer"}>
            <input
              type="radio"
              id="theme-toggle"
              name="theme-toggle"
              checked={checked}
              value={themeType}
              title={`Use ${themeType} theme`}
              aria-label={`Use ${themeType} theme`}
              onChange={() => {
                localStorage.setItem("theme", themeType);
                setTheme(themeType);
              }}
            />
            {themeType}
          </label>
        );
      })}
    </div>
  );
}
