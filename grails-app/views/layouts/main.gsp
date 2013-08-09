<!DOCTYPE html>
<!--[if lt IE 7 ]> <html lang="en" class="no-js ie6"> <![endif]-->
<!--[if IE 7 ]>    <html lang="en" class="no-js ie7"> <![endif]-->
<!--[if IE 8 ]>    <html lang="en" class="no-js ie8"> <![endif]-->
<!--[if IE 9 ]>    <html lang="en" class="no-js ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html lang="en" class="no-js"><!--<![endif]-->
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<title><g:layoutTitle default="Grails"/></title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="shortcut icon" href="${resource(dir: 'images', file: 'favicon.ico')}" type="image/x-icon">
		<link rel="apple-touch-icon" href="${resource(dir: 'images', file: 'apple-touch-icon.png')}">
		<link rel="apple-touch-icon" sizes="114x114" href="${resource(dir: 'images', file: 'apple-touch-icon-retina.png')}">
		<link rel="stylesheet" href="${resource(dir: 'css', file: 'main.css')}" type="text/css">
		<link rel="stylesheet" href="${resource(dir: 'css', file: 'mobile.css')}" type="text/css">
		<g:layoutHead/>
		<r:layoutResources />
	</head>
	<body>
		<div id="grailsLogo" role="banner">
			<%--<a href="http://grails.org"><img src="${resource(dir: 'images', file: 'grails_logo.png')}" alt="Grails"/></a>--%>
			<br/>
			<header>
				<h1>Connect Four Sample App</h1>
			</header>
			
		</div>
		<div class="nav" role="navigation">
			<div class="nav" role="navigation">
  			<p>Connect Four (also known as Captain's Mistress, Four Up, Plot Four, Find Four, Fourplay, Four in a Row and Four in a Line) 
				is a two-player game in which the players first choose a color and then take turns dropping colored discs from the top into 
				a seven-column, six-row vertically suspended grid. <a href="http://en.wikipedia.org/wiki/Connect_Four" title="Connect Four Wiki">Wiki</a> </p>	
  			</div>
  			<br/>
  			<g:link controller="connect" action="index"> Home </g:link>
			
		</div>
		
		<g:layoutBody/>
		<div class="footer" role="contentinfo"></div>
		<div id="spinner" class="spinner" style="display:none;"><g:message code="spinner.alt" default="Loading&hellip;"/></div>
		<g:javascript library="application"/>
		<r:layoutResources />
	</body>
</html>