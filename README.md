# 🖨 Telegraph-JS (Telegraph Device Simulator)

## 🌐 Languages

- [🇬🇧 English](README.md)
- [🇮🇷 Persian](README_FA.md)

## 📋 Table of Contents

- [Project Description](#project-description)
- [The Story Behind an Old Dream](#the-story)
- [Telegraph](#telegraph)
- [Telegram](#telegram)
- [Morse Code](#morse-code)
- [Morse Code Table](#morse-code-table)
- [History and Inventor](#history)
- [How the Device Works](#how-the-device-works)
- [Uses of Morse Code](#uses)
- [Project Goals](#project-goals)
- [How to Run the Project](#how-to-run)
- [How the Project Works](#how-the-project-works)
- [Project Structure](#project-structure)
- [Project Challenges](#project-challenges)
- [Learning Outcomes](#learning-outcomes)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

---

<a id="project-description"></a>

## 📋 Project Description

**Telegraph-JS** is a simple simulator of a telegraph device built using **HTML, CSS, and JavaScript**.  
This project recreates how classic telegraph systems worked by sending and receiving messages using **Morse code** and precise **timing**. It is designed as an **educational project** to help users better understand telegraph communication and how Morse code operates in practice.

## 🛜 Live Demo

<div align="center">
   <a href="https://mohammad-khiabani.github.io/Telegraph-js/">
      <img
        alt="project demo"
        src="https://github.com/user-attachments/assets/338d8b19-a0e3-4ccb-a340-54bd0d4adacd"
      />
   </a>
   <br/>
   <br/>
   <a style="font-size:Bold" href="https://mohammad-khiabani.github.io/Telegraph-js/">
     <img width="300" height="50" src="https://img.shields.io/badge/🚀_Explore_Live_Demo-2ea44f?style=for-the-badge" />
   </a>
</div>

<a id="the-story"></a>

## 💭 The Story Behind an Old Dream

> The idea for this project started with an old interest in Morse code. I always felt that this language might be useful someday. Since childhood, I’ve been fascinated by mystery and codes, and in my mind, the people in movies who communicated using Morse code were incredibly cool.  
> Despite this interest, I never seriously pursued it—it felt more like a distant dream.
>
> Time passed, and during a dark period of restricted internet access in Iran, I finally found an excuse to turn that old dream into reality.  
> With no proper resources and no internet access for debugging or learning, I started coding. My only reference was a simple video showing Morse letters alongside their English equivalents.
>
> At first, everything felt confusing and difficult. Writing Morse code using keyboard taps, managing timing, and counting taps was challenging. But eventually, I managed to implement my ideas and build a working prototype.  
> What you see here is the very first version of my telegraph simulator.
>
> Today, I personally use this project to practice Morse code daily, and I can confidently say it has helped me a lot in learning.

---

<a id="telegraph"></a>

## 🖨 Telegraph

The **telegraph** was the first fast, long-distance communication system that worked using electrical pulses over wires.  
Information was transmitted by repeatedly connecting and disconnecting an electric current.

<div align="center">
<img width="1600" height="900" alt="A telegraph morse key(by Science Museum, London (CC BY-NC-SA))" src="https://github.com/user-attachments/assets/c71729b4-8861-4b90-8fb4-3c1af52b7705" />
<p>A telegraph morse key(by Science Museum, London (CC BY-NC-SA))</p>
</div>

<a id="telegram"></a>

## ✉️ Telegram

A **telegram** referred to a message sent via an **electrical telegraph**, typically encoded using **Morse code**.

---

<a id="morse-code"></a>

## 📜 Morse Code

**Morse code** is an encoding system used for communication through **telegraph devices**, invented by **Samuel Morse** and his collaborators.  
It is not a spoken language, but rather a method of representing letters, numbers, and symbols using dots (·) and dashes (–). Each character is defined by a unique combination of dots and dashes and transmitted through interrupted electrical signals.

<div align="center">
<img
    alt="International morse code"
    src="https://github.com/user-attachments/assets/d855ffab-92f8-4d79-b8e3-716872d14e9b"
  />
<p>International morse code</p>
</div>

<a id="morse-code-table"></a>

## 🧾 Morse Code Table

<table align="center">
  <tr valign="top">
    <td>
      <table>
        <tr><th>Letters</th></tr>
        <tr><td><b>A</b> .-</td></tr>
        <tr><td><b>B</b> -...</td></tr>
        <tr><td><b>C</b> -.-.</td></tr>
        <tr><td><b>D</b> -..</td></tr>
        <tr><td><b>E</b> .</td></tr>
        <tr><td><b>F</b> ..-.</td></tr>
        <tr><td><b>G</b> --.</td></tr>
        <tr><td><b>H</b> ....</td></tr>
        <tr><td><b>I</b> ..</td></tr>
        <tr><td><b>J</b> .---</td></tr>
        <tr><td><b>K</b> -.-</td></tr>
        <tr><td><b>L</b> .-..</td></tr>
        <tr><td><b>M</b> --</td></tr>
        <tr><td><b>N</b> -.</td></tr>
        <tr><td><b>O</b> ---</td></tr>
        <tr><td><b>P</b> .--.</td></tr>
        <tr><td><b>Q</b> --.-</td></tr>
        <tr><td><b>R</b> .-.</td></tr>
        <tr><td><b>S</b> ...</td></tr>
        <tr><td><b>T</b> -</td></tr>
        <tr><td><b>U</b> ..-</td></tr>
        <tr><td><b>V</b> ...-</td></tr>
        <tr><td><b>W</b> .--</td></tr>
        <tr><td><b>X</b> -..-</td></tr>
        <tr><td><b>Y</b> -.--</td></tr>
        <tr><td><b>Z</b> --..</td></tr>
      </table>
    </td>
    <td>
      <table>
        <tr><th>Digits</th></tr>
        <tr><td>0 -----</td></tr>
        <tr><td>1 .----</td></tr>
        <tr><td>2 ..---</td></tr>
        <tr><td>3 ...--</td></tr>
        <tr><td>4 ....-</td></tr>
        <tr><td>5 .....</td></tr>
        <tr><td>6 -....</td></tr>
        <tr><td>7 --...</td></tr>
        <tr><td>8 ---..</td></tr>
        <tr><td>9 ----.</td></tr>
      </table>
    </td>
    <td>
      <table>
        <tr><th>Punctuation</th></tr>
        <tr><td>&amp; .-...</td></tr>
        <tr><td>' .----.</td></tr>
        <tr><td>@ .--.-.</td></tr>
        <tr><td>) -.--.-</td></tr>
        <tr><td>( -.--.</td></tr>
        <tr><td>: ---...</td></tr>
        <tr><td>, --..--</td></tr>
        <tr><td>= -...-</td></tr>
        <tr><td>! -.-.--</td></tr>
        <tr><td>. .-.-.-</td></tr>
        <tr><td>- -....-</td></tr>
        <tr><td>× -..-</td></tr>
        <tr><td>% ---</td></tr>
        <tr><td>+ .-.-.</td></tr>
        <tr><td>" .-..-.</td></tr>
        <tr><td>? ..--..</td></tr>
        <tr><td>/ -..-.</td></tr>
      </table>
    </td>
  </tr>
</table>

---

<a id="history"></a>

## 📖 History and Inventor

The **telegraph** was first introduced in **1838** by the American artist and inventor **Samuel Morse**.  
This invention replaced older communication methods such as light signals, smoke signals, and lamps, making long-distance messaging faster and more reliable.  
The telegraph was officially patented on **January 6, 1843**.

<div align="center">
<img
    alt="Samuel Morse"
    src="https://github.com/user-attachments/assets/420ce34d-46f7-48b8-a17e-7286fe6172db"
  />
<p>Samuel Morse</p>
</div>

<hr>

<a id="how-the-device-works"></a>

## ⚙️ How the Device Works

The telegraph consists of three main parts: a **sender**, a **receiver**, and a **wire**.

The sender includes a power source and a simple key used to connect or disconnect the electric current.  
The receiver contains components such as an electromagnet, which attracts a movable metal piece when current flows through it.

By interrupting the electric current, electrical pulses travel through the wire. Short and long interruptions are interpreted as **dots and dashes**, forming Morse code signals.  
On the receiving end, these signals were either heard as clicking sounds or recorded on paper tape.

<div align="center">
  <img
    width="485"
    height="215"
    alt="Parts of a telegraph system"
    src="https://github.com/user-attachments/assets/de4a6a4a-7a5e-4506-906f-980096819912"
  />
  <p>Parts of a telegraph system</p>
</div>

<hr>

<a id="uses"></a>

## 🔨 Uses of Morse Code

Throughout history, Morse code has been used by sailors, prisoners of war, people with disabilities, navigation units, and more.  
Although modern communication technologies have reduced its everyday use, Morse code is still relevant in specific fields such as navigation systems, amateur radio, high-frequency signaling, and emergency communication.

Because Morse code is based on simple signals, it is also highly valuable for people who cannot speak or use their hands, allowing communication through blinking or minimal movements.

---

<a id="how-to-run"></a>

## ▶ How to Run the Project

1. Enter the `TELEGRAPH-JS` directory
2. Run the project using a local server

### Recommended (VS Code):

- Install the **Live Server** extension
- Right-click on `index.html` and select **Open with Live Server**

### Alternative methods (Terminal):

```bash
npx serve
```

or

```bash
python -m http.server
```

3. Open `http://localhost` in your browser
4. Press the **SPACE** key to start entering Morse code

> ⚠️ This project uses **JavaScript Modules**.  
> Opening the HTML file directly will cause a **CORS error**. Always run it via a local server.

---

<a id="how-the-project-works"></a>

## 📝 How the Project Works

- Press **SPACE once** to send a **dot (·)**
- Press **SPACE twice quickly** to send a **dash (–)**
- A short pause indicates the end of a letter
- A longer pause indicates a space between words

---

<a id="project-structure"></a>

## 🧱 Project Structure

```text
TELEGRAPH-JS/
├─ assets/
│  └─ audio/
│     └─ morse-audio.wav
├─ css/
│  └─ style.css
├─ images/
│  └─ background.png
├─ js/
│  ├─ alphabet.js
│  └─ app.js
├─ about.html
├─ help.html
├─ index.html
├─ LICENSE
├─ package.json
├─ README_FA.md
└─ README.md
```

---

<a id="project-challenges"></a>

## 🪨 Project Challenges

- Learning and understanding Morse code structure
- Implementing accurate timing for dots, dashes, letters, and words
- Simulating real telegraph operator behavior
- Managing multiple timers simultaneously in JavaScript
- Studying how real telegraph devices operated and recreating similar logic

---

<a id="learning-outcomes"></a>

## 🏆 Learning Outcomes

By studying this project, you will learn:

- Keyboard event handling (`keydown`, `keyup`)
- Time-based logic in JavaScript
- Managing multiple timers without conflicts
- Simulating real-world systems digitally
- Writing modular JavaScript code
- DOM manipulation for live text updates
- Audio control using the HTML Audio API

---

<a id="roadmap"></a>

## 🔮 Roadmap

- [ ] Multilingual support (Persian / English)
- [ ] Full text ↔ Morse code translation
- [ ] Click-to-copy functionality

---

<a id="contributing"></a>

## 🤝 Contributing

If you have ideas or find bugs, contributions are welcome.  
Fork the repository, create a new branch, and submit a Pull Request ❤️

---

<a id="license"></a>

## 📄 License

This project is released under the **MIT License**.

---

⭐ If you found this project useful, don’t forget to give it a star!

Created by [Mohammad Khiabani](https://github.com/Mohammad-Khiabani)
