<?php
$servidor = "localhost";
$usuario = "root";
$senha_bd = "" ;
$banco = "Patas_e_pelos";

$conexão = mysqli_connect ($servidor, $usuario, $senha_bd, $banco);

if (!$conexão) {
    die("erro de conexão: " . mysqli_connect_error ());
}

$nome = $_POST['nome'];
$email = $_POST['email'];
$telefone = $_POST['tel'];

$sql = "insert into cadastro (nome, email, telefone)
values ('$nome', '$email', '$telefone')";

if (mysqli_query($conexão, $sql)) {
    echo "<h3> Aluno cadastrado com sucesso!</h3>";
    echo "<a href= 'cadastro.html'>Voltar</a>";
} else {
    echo "Erro ao cadastrar: " . mysqli_error($conexão);
}

mysqli_close($conexão);
?>