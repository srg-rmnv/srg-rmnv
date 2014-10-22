<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Михаил Соколов |  пластический хирург</title>
<link  href="fotorama.css" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="base.css" />
<link href='http://fonts.googleapis.com/css?family=Roboto:400,100&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
<script src="fotorama.js"></script> 

</head>

<body>

<div class="social">
	<a href="#"><img src="img/facebook.png"/></a>
	<a href="#"><img src="img/vk.png"/></a>
	<a href="#"><img src="img/instagram.png"/></a>
	<a href="#"><img src="img/youtube.png"/></a>
</div>

<ul id="nav">
	<li class="current"><a href="#section-1"></a></li>
	<li><a href="#section-2"></a></li>
	<li><a href="#section-3"></a></li>
	<li><a href="#section-4"></a></li>
</ul>
<div id="container">
	<div class="section" id="section-1">
		<div class="logo">
			<img src="img/logo.png"/>
			<h3>пластический хирург</h3>
			<img src="img/logo_text.png" />
		</div>
	</div>

<div class="section" id="section-2">
<img class="photo" src="img/portrait.png"/ ><h1>контакты:</h1>

<h2>пластический хирург<br>Член <a href ="http://new.spras.ru/">Российского общества пластических,<br> реконструктивных и эстетических хирургов</a></h2>
<h4 class="phone">+7 (920) 252-22-00<br><b>mik968@yandex.ru</b></h4>
<p>Михаил Анатольевич Соколов – ведущий пластический хирург Нижегородской области. 
Михаил Анатольевич регулярно повышает свою квалификацию, проходя российские и международные интенсивные курсы.
 Следит за международными тенденциями и представляет мировой
 класс пластической хирургии в России.</p>

<h2 class="spec"><strong>специализация:</strong></h2>
<div class="specont">
<dl class="specs">
<li>Маммопластика (коррекция груди)</li>
<li>Абдоминопластика (пластика живота)</li>
<li>Ринопластика (пластика носа)</li>
<li>Отопластика (пластика ушных раковин)</li>
</dl>
<dl class="specs specs2">
<li>Липосакция</li>
<li>Фейслифтинг</li>
<li>Золотые нити</li>
</dl>
</div>

</div>
	<div class="section" id="section-3">
	<img class="photos" src="img/photo.png" /><h1>фото:</h1>
		<div class="fotorama" data-loop="true" data-width="100%"
     data-maxwidth="100%" data-fit="cover">
						<?php

						$directory = 'gallery';

						$allowed_types=array('jpg','jpeg','gif','png');
						$file_parts=array();
						$ext='';
						$title='';
						$i=0;

						$dir_handle = @opendir($directory) or die("There is an error with your image directory!");

						while ($file = readdir($dir_handle)) 
						{
							if($file=='.' || $file == '..') continue;
							
							$file_parts = explode('.',$file);
							$ext = strtolower(array_pop($file_parts));

							$title = implode('.',$file_parts);
							$title = htmlspecialchars($title);
							
							$nomargin='';
							
							if(in_array($ext,$allowed_types))
							{
								if(($i+1)%4==0) $nomargin=' nomargin';
							
								echo '
								<img class="pic'.$nomargin.'" src="'.$directory.'/'.$file.'"/ >';
								
								$i++;
							}
						}

						closedir($dir_handle);

						?>		
	</div>
	</div>


	<div class="section" id="section-4">
	<img class="video" src="img/video.png" /><h1>видео:</h1>
			<div class="fotorama" data-loop="true" data-arrows="true" data-width="100%"
     data-maxwidth="100%"
     data-ratio="16/9">
		<?php
	$f = fopen("test.txt", "r");
	while (!feof($f)) { 
	   $arrM = explode(",",fgets($f)); 
	   echo "<a href='" . $arrM[1] . "'>" . $arrM[0]. "</a>"; 
	}

	fclose($f);
	?>
		</div>
	</div>
		</div>
<footer>
	Михаил Соколов © 2013	
</footer>
	<script src="jquery.scrollTo.js"></script>
<script src="jquery.nav.js"></script>
<script>
	$('#nav').onePageNav({
   currentClass: 'current',
   changeHash: false,
   scrollSpeed: 750
 });
</script>

</body>
</html>
