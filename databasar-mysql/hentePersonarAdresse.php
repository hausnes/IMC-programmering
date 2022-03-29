<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>DB-test</title>
		<style>
			/* TABELL https://www.w3schools.com/css/css_table.asp */ 
			table {
				font-family: Arial, Helvetica, sans-serif;
				border-collapse: collapse;
				width: 100%;
			}
			td, th {
				border: 1px solid #ddd;
				padding: 8px;
			}
			tr:nth-child(even){background-color: #f2f2f2;}
			tr:hover {background-color: #ddd;}
			th {
				padding-top: 12px;
				padding-bottom: 12px;
				text-align: left;
				background-color: #4CAF50;
				color: white;
			}
			/* SIDEOPPSETT: flexbox */
			body {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}
    	</style>
	</head>
	<body>
		<h1>Tilkobling til database</h1>
		<?php
			// Innloggingsinformasjon og spesifisering av kva database ein jobbar med
			$db_host = 'localhost';
			$db_user = 'root';
			$db_password = 'root';
			$db_db = 'post';
			$db_port = 3306;

			$mysqli = new mysqli(
				$db_host,
				$db_user,
				$db_password,
				$db_db
			);
			
			// Kontroll om tilkoblingen til databasen fungerar (henta frå MAMP-startsida)
			if ($mysqli->connect_error) {
				echo 'Errno: '.$mysqli->connect_errno;
				echo '<br>';
				echo 'Error: '.$mysqli->connect_error;
				exit();
			}

			echo '<p>Success: A proper connection to MySQL was made.';
			echo '<br>';
			echo 'Host information: '.$mysqli->host_info;
			echo '<br>';
			echo 'Protocol version: '.$mysqli->protocol_version . "</p><br>";

			$mysqli->set_charset("utf8");

			// Hentar ut data frå databasen og skriv det ut til nettsida.
			// Basert på https://www.w3schools.com/php/php_mysql_select.asp
			$sql = "SELECT person.fornavn, person.etternavn, person.postnr, postadresse.poststed FROM person, postadresse WHERE person.postnr = postadresse.postnr";
			$result = $mysqli->query($sql);

			// Enkel utskrift, utan formatering
			/*
			if ($result->num_rows > 0) {
				// output data of each row
				while($row = $result->fetch_assoc()) {
					echo "Fornavn: " . $row["fornavn"]. " - Etternavn: " . $row["etternavn"]. " " . $row["etternavn"]. " - Postnummer: " . $row["postnr"]. " - Poststed: " . $row["poststed"]. "<br>";
			}
			} else {
				echo "Ingen resultat.";
			}
			*/

			// Alternativ med HTML-tabell
			if ($result->num_rows > 0) {
				echo "<table><tr><th>Fornavn</th><th>Etternavn</th><th>Postnummer</th><th>Poststed</th></tr>";
				// output data of each row
				while($row = $result->fetch_assoc()) {
					echo "<tr><td>".$row["fornavn"]."</td><td>".$row["etternavn"]."</td><td>".$row["postnr"]."</td><td>".$row["poststed"]."</td></tr>";
				}
				echo "</table>";
			} 
			else {
				echo "Ingen resultat.";
			}

			$mysqli->close();
		?>
	</body>
	</html>