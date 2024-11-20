let randomIndex_1, randomIndex_2;
            let p1, p2;
            let isGameActive = false;

            const player_1 = ["Kertas.jpeg", "Gunting.jpeg", "Batu.jpeg"];
            const player_2 = ["Gunting.jpeg", "Batu.jpeg", "Kertas.jpeg"];

            document.querySelector(".start").addEventListener("click", function () {
                if (isGameActive) return;

                isGameActive = true;
                document.querySelector("#box_player1 button").disabled = false;
                document.querySelector("#box_player2 button").disabled = false;

                p1 = setInterval(function () {
                    randomIndex_1 = Math.floor(Math.random() * player_1.length);
                    document.querySelector("#img_player1").src = player_1[randomIndex_1];
                }, 100);

                p2 = setInterval(function () {
                    randomIndex_2 = Math.floor(Math.random() * player_2.length);
                    document.querySelector("#img_player2").src = player_2[randomIndex_2];
                }, 100);
            });

            let hasil_p1, hasil_p2;
            let click_btn = 0;
            let score_p1 = 0;
            let score_p2 = 0;
            function player1() {
                clearInterval(p1);
                hasil_p1 = player_1[randomIndex_1];
                click_btn++;

                if (click_btn % 2 === 0) {
                    tampilkan();
                }
            }

            function player2() {
                clearInterval(p2);
                hasil_p2 = player_2[randomIndex_2];
                click_btn++;

                if (click_btn % 2 === 0) {
                    tampilkan();
                }
            }

            function tampilkan() {
                let status;

                if (hasil_p1 === hasil_p2) {
                    status = "SERI";
                } else if (hasil_p1 === "Kertas.jpeg") {
                    status = hasil_p2 === "Batu.jpeg" ? "P1 WIN" : "P2 WIN";
                } else if (hasil_p1 === "Gunting.jpeg") {
                    status = hasil_p2 === "Kertas.jpeg" ? "P1 WIN" : "P2 WIN";
                } else if (hasil_p1 === "Batu.jpeg") {
                    status = hasil_p2 === "Gunting.jpeg" ? "P1 WIN" : "P2 WIN";
                }

                if (status === "P1 WIN") {
                    score_p1++;
                } else if (status === "P2 WIN") {
                    score_p2++;
                }

                document.querySelector(".score_p1").innerHTML = score_p1;
                document.querySelector(".score_p2").innerHTML = score_p2;

                document.querySelector("#box_player1 button").disabled = true;
                document.querySelector("#box_player2 button").disabled = true;

                isGameActive = false;
                click_btn = 0;
            }