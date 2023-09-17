[![stars](https://img.shields.io/github/stars/barbarbar338/react-state-query?color=yellow&logo=github&style=for-the-badge)](https://github.com/barbarbar338/react-state-query)
[![license](https://img.shields.io/github/license/barbarbar338/react-state-query?logo=github&style=for-the-badge)](https://github.com/barbarbar338/react-state-query)
[![supportServer](https://img.shields.io/discord/711995199945179187?color=7289DA&label=Support&logo=discord&style=for-the-badge)](https://discord.gg/BjEJFwh)
[![forks](https://img.shields.io/github/forks/barbarbar338/react-state-query?color=green&logo=github&style=for-the-badge)](https://github.com/barbarbar338/react-state-query)
[![issues](https://img.shields.io/github/issues/barbarbar338/react-state-query?color=red&logo=github&style=for-the-badge)](https://github.com/barbarbar338/react-state-query)

<p align="center">
  <img src="https://raw.githubusercontent.com/barbarbar338/readme-template/main/icon.png" alt="Logo" />
  <h3 align="center">React State Query</h3>

  <p align="center">
    Save state of your React app in URL!
    <br />
    <a href="https://discord.gg/BjEJFwh"><strong>Get support »</strong></a>
    <br />
    <br />
    <a href="https://github.com/barbarbar338/react-state-query/issues">Report Bug</a>
    ·
    <a href="https://github.com/barbarbar338/react-state-query/issues">Request Feature</a>
  </p>
</p>

# 📦 Installation

-   Using yarn: `yarn add react-state-query`
-   Using npm: `npm i react-state-query`

# 🤓 Usage

```js
import { useStateQuery } from "react-state-query";

function App() {
	const [value, setValue] = useStateQuery("query-key", "default value not required");

	return (
		<div>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value); // query also updated, refresh the page and see the same value
        }}
      />
    </div>
	);
}

export default App;
```

# 📄 License

Copyright © 2023 [Barış DEMİRCİ](https://github.com/barbarbar338).

Distributed under the [GPL-3.0](https://www.gnu.org/licenses/gpl-3.0.html) License. See `LICENSE` for more information.

# 🧦 Contributing

Feel free to use GitHub's features.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/my-feature`)
3. Run prettier and eslint (`npm run format && npm run lint`)
4. Commit your Changes (`git commit -m 'my awesome feature my-feature'`)
5. Push to the Branch (`git push origin feature/my-feature`)
6. Open a Pull Request

# 🔥 Show your support

Give a ⭐️ if this project helped you!

# 📞 Contact

-   Mail: demirci.baris38@gmail.com
-   Discord: https://discord.gg/BjEJFwh
-   Instagram: https://www.instagram.com/ben_baris.d/
