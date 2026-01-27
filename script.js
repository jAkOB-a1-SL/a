/* ===== SEARCH LINK DATABASE ===== */
  const pages = [
    { name: "Google", url: "https://google.com" },
    { name: "YouTube", url: "https://youtube.com" },
    { name: "Wikipedia", url: "https://wikipedia.org" },
    { name: "ChatGPT", url: "https://openai.com" },
    { name: "GitHub", url: "https://github.com" },
    { name: "Gamemodes", url: "https://jakob-a1-sl.github.io/a/indexGamemodes.html" },
    { name: "Agents" , url:"https://jakob-a1-sl.github.io/a/indexAgents.html"}
  ];

  function showSuggestions() {
    const input = document.getElementById("searchBar").value.toLowerCase();
    const suggestionsBox = document.getElementById("suggestions");

    if (input === "") {
      suggestionsBox.style.display = "none";
      return;
    }

    const matches = pages.filter(page =>
      page.name.toLowerCase().includes(input)
    );

    suggestionsBox.innerHTML = "";
    matches.forEach(match => {
      const div = document.createElement("div");
      div.classList.add("suggestion");
      div.textContent = match.name;

      div.onclick = () => { window.location.href = match.url; };

      suggestionsBox.appendChild(div);
    });

    suggestionsBox.style.display = matches.length > 0 ? "block" : "none";
  }