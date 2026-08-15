document.addEventListener('DOMContentLoaded', function () {
  // Festival schedule: stage -> [{time: "3:00 PM", name: "..."}]
  // Each slot runs for 1 hour from its start time.
  var schedule = {
    main: [
      ["15:00", "case managerz"], ["16:00", "JH-X9"], ["17:00", "Traktion"],
      ["18:00", "Scott Ashley"], ["19:00", "Mixtress Detroit"], ["20:00", "Cody Hammer"],
      ["21:00", "Dokk Hollidae"], ["22:00", "Dilemma"]
    ],
    corridor: [
      ["15:00", "Lbxchapo"], ["16:00", "Vincenzo"], ["17:00", "Tangle Garden"],
      ["18:00", "Andrea Kalajian"], ["19:00", "Brent Shay"], ["20:00", "Neil V."],
      ["21:00", "DJ Disc Detroit"]
    ],
    discovery: [
      ["15:00", "Duotron"], ["16:00", "Dedicated Spuddler"], ["17:00", "SuperAmbulance"],
      ["18:00", "ILLogical"], ["19:00", "Volatile Solvent"]
    ]
  };

  var FESTIVAL_YEAR = 2026, FESTIVAL_MONTH = 7, FESTIVAL_DATE = 22; // month is 0-indexed (7 = August)

  function slug(name) {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  }

  var now = new Date();
  var isFestivalDay = now.getFullYear() === FESTIVAL_YEAR && now.getMonth() === FESTIVAL_MONTH && now.getDate() === FESTIVAL_DATE;
  if (!isFestivalDay) return;

  var nowMinutes = now.getHours() * 60 + now.getMinutes();

  Object.keys(schedule).forEach(function (stage) {
    var slots = schedule[stage];
    slots.forEach(function (slot, i) {
      var startH = parseInt(slot[0].split(':')[0], 10);
      var startMinutes = startH * 60;
      var endMinutes = startMinutes + 60;
      var name = slot[1];
      if (nowMinutes >= startMinutes && nowMinutes < endMinutes) {
        // Tag the schedule table cell
        document.querySelectorAll('table.schedule a').forEach(function (a) {
          if (a.textContent.trim() === name) {
            a.closest('td').classList.add('now-playing-cell');
          }
        });
        // Tag the artist bio card
        var card = document.getElementById(slug(name));
        if (card) {
          card.classList.add('now-playing-card');
          var badge = document.createElement('span');
          badge.className = 'now-playing-badge';
          badge.textContent = 'Now Playing';
          card.insertBefore(badge, card.firstChild);
        }
      }
    });
  });
});
