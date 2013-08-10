<%@ page contentType="text/html;charset=UTF-8" %>
<%@ page import="game.connect.Board" %>
<%@ page import="game.connect.Cell" %>

<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
	<meta name="layout" content="main"/>
	<title><g:message code="game.connectfour.label"/></title>
	<%--<g:javascript library="connectfour"/>
--%>
	<script type="text/javascript" src="${resource(dir: 'js', file: 'connectfour.js')}"></script>
</head>
<body>
  <div class="body">
  <%--<button onclick="end()"> End </button>
  	--%><div>
  		<table id="tallyboard">
  			<thead>
  			<tr>
  				<td id="playerCellA" style="color:rgb(248, 93, 93)">
  					${playerA }
  				</td>
  				<td id="playerCellB" style="color:blue"> 
  					${playerB }
  				</td>
  			<tr/>
  			</thead>
  			<tr>
  				<td id="turnCell" style="background:rgb(248, 93, 93)" colspan="2">
  					<h1 style="color:white">TURN</h1>
  				</td>
  			<tr/>
  		</table>
  	</div>
  	
  	<table id="board">
  		<tr class="0">
  		<g:each in="${board.cells}" var="cell">
  			<td class="${cell.y}">
  				<button class="cellButton buttons" id="${cell.x}_${cell.y}" onclick="play(${cell.x}, ${cell.y})">
  				o
  				<input type="hidden" id="played_${cell.x}_${cell.y}" value="${cell.played}" /> 
  				</button>
  			</td>
  			
  			<g:if test="${cell.y == (board.cols - 1) }">
  				</tr>
  				<g:if test="${cell.x != (board.rows - 1) }">	
  					<tr class="${cell.x + 1}">
  				</g:if>
  			</g:if>
  		</g:each>
  	</table>
  	<input type="hidden" id="clicks" value="0"/>
  		
  	
  </div>
</body>
</html>