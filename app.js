<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Language Flashcards</title>
  <link rel="stylesheet" href="styles.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
</head>
<body>
  <div class="container">
    <!-- Removed Title -->
    <div class="progress-container">
      <div class="progress-bar" id="progress-bar"></div>
    </div>

    <div id="flashcard">
      <p id="original-word">Loading...</p>
      <p id="translated-word" style="display: none;"></p>

      <div class="audio-controls">
        <select id="language-select">
          <option value="fr-FR">French</option>
          <option value="en-US">English</option>
        </select>
        <button id="pronounce-btn"><i class="fas fa-volume-up"></i> Pronounce</button>
      </div>

      <input type="text" id="user-answer" placeholder="Type translation here" autocomplete="off">
      <div class="buttons">
        <button id="submit-btn"><i class="fas fa-check"></i> Submit</button>
        <button id="show-btn"><i class="fas fa-eye"></i> Show Translation</button>
        <button id="hard-btn"><i class="fas fa-bookmark"></i> Mark as Hard</button>
        <button id="easy-btn"><i class="fas fa-thumbs-up"></i> Mark as Easy</button>
        <button id="next-btn" style="display: inline;"><i class="fas fa-arrow-right"></i> Next</button>
      </div>
      <p id="feedback"></p>
      <div class="stats">
        <span id="remaining-count">Cards remaining: 0</span>
        <span id="hard-count">Hard cards: 0</span>
      </div>
    </div>
  </div>
  <script src="app.js"></script>
</body>
</html>
