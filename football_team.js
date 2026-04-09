// 1. Tạo đối tượng footballTeam
let footballTeam = {
  teamName: "FC Demo",
  coachName: "Tran Van A",
  players: [
    {
      name: "Nguyen Van B",
      age: 22,
      position: "Forward",
      isInjured: false
    },
    {
      name: "Le Van C",
      age: 25,
      position: "Midfielder",
      isInjured: true
    }
  ],

  // 2. Thêm cầu thủ
  addPlayer: function(name, age, position, isInjured) {
    this.players.push({
      name: name,
      age: age,
      position: position,
      isInjured: isInjured
    });
    console.log("Đã thêm cầu thủ: " + name);
  },

  // 3. In danh sách cầu thủ
  listPlayers: function() {
    console.log("=== Danh sách cầu thủ ===");
    this.players.forEach((player, index) => {
      console.log(
        (index + 1) + ". " +
        player.name + " - " +
        player.age + " tuổi - " +
        player.position + " - Chấn thương: " +
        player.isInjured
      );
    });
  },

  // 4. Đếm cầu thủ bị chấn thương
  injuredPlayers: function() {
    let count = 0;
    this.players.forEach(player => {
      if (player.isInjured) {
        count++;
      }
    });
    console.log("Số cầu thủ bị chấn thương: " + count);
  },

  // 5. Thông tin đội bóng
  teamInfo: function() {
    console.log("=== Thông tin đội bóng ===");
    console.log("Tên đội: " + this.teamName);
    console.log("Huấn luyện viên: " + this.coachName);
    console.log("Số cầu thủ: " + this.players.length);
  }
};
