$(document).ready(function(){var e=localStorage.getItem("currentFlag");"cy"!==e&&"gr"!==e&&(e="gr");var t=".flag-drop__item--"+e;$(".flag-drop__item").each(function(){$(this).show()}),$(t).hide();var l=e.toUpperCase();$(".flag-drop__lang").text(l),e="flag-drop__selected--"+e,$(".flag-drop__selected").addClass(e)}),$(".flag-drop__selected").on("click",function(){$(".flag-drop__list").toggle()}),$(".flag-drop__item--gr").on("click",function(e){e.preventDefault(),localStorage.setItem("currentFlag","gr"),location.reload(!0)}),$(".flag-drop__item--cy").on("click",function(e){e.preventDefault(),localStorage.setItem("currentFlag","cy"),location.reload(!0)}),$("#signButton").on("click",function(){$("#loginBlock").slideToggle(200)});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsYWcuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJmbGFnQ3VyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImhpZGRlbkxhbmdTZWxlY3RvciIsImVhY2giLCJ0aGlzIiwic2hvdyIsImhpZGUiLCJsYW5nIiwidG9VcHBlckNhc2UiLCJ0ZXh0IiwiYWRkQ2xhc3MiLCJvbiIsInRvZ2dsZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldEl0ZW0iLCJsb2NhdGlvbiIsInJlbG9hZCIsInNsaWRlVG9nZ2xlIl0sIm1hcHBpbmdzIjoiQUFBQUEsRUFBRUMsVUFBVUMsTUFBTSxXQUNkLElBQUlDLEVBQVVDLGFBQWFDLFFBQVEsZUFFbkIsT0FBWkYsR0FBZ0MsT0FBWkEsSUFDcEJBLEVBQVUsTUFHZCxJQUFJRyxFQUFxQixxQkFBdUJILEVBRWhESCxFQUFFLG9CQUFvQk8sS0FBSyxXQUN2QlAsRUFBRVEsTUFBTUMsU0FFWlQsRUFBRU0sR0FBb0JJLE9BRXRCLElBQUlDLEVBQU9SLEVBQVFTLGNBRW5CWixFQUFFLG9CQUFvQmEsS0FBS0YsR0FFM0JSLEVBQVUsd0JBQTBCQSxFQUNwQ0gsRUFBRSx3QkFBd0JjLFNBQVNYLEtBSXZDSCxFQUFFLHdCQUF3QmUsR0FBRyxRQUFTLFdBQ2xDZixFQUFFLG9CQUFvQmdCLFdBRzFCaEIsRUFBRSx3QkFBd0JlLEdBQUcsUUFBUSxTQUFTRSxHQUMxQ0EsRUFBRUMsaUJBQ0ZkLGFBQWFlLFFBQVEsY0FBZSxNQUNwQ0MsU0FBU0MsUUFBTyxLQUdwQnJCLEVBQUUsd0JBQXdCZSxHQUFHLFFBQVEsU0FBU0UsR0FDMUNBLEVBQUVDLGlCQUNGZCxhQUFhZSxRQUFRLGNBQWUsTUFDcENDLFNBQVNDLFFBQU8sS0FJcEJyQixFQUFFLGVBQWVlLEdBQUcsUUFBUyxXQUN6QmYsRUFBRSxlQUFlc0IsWUFBWSIsImZpbGUiOiJmbGFnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgIHZhciBmbGFnQ3VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRGbGFnJyk7XHJcblxyXG4gICAgaWYgKGZsYWdDdXIgIT09ICdjeScgJiYgZmxhZ0N1ciAhPT0gJ2dyJykge1xyXG4gICAgICAgIGZsYWdDdXIgPSAnZ3InO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBoaWRkZW5MYW5nU2VsZWN0b3IgPSAnLmZsYWctZHJvcF9faXRlbS0tJyArIGZsYWdDdXI7XHJcblxyXG4gICAgJChcIi5mbGFnLWRyb3BfX2l0ZW1cIikuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICQodGhpcykuc2hvdygpO1xyXG4gICAgfSlcclxuICAgICQoaGlkZGVuTGFuZ1NlbGVjdG9yKS5oaWRlKCk7XHJcblxyXG4gICAgdmFyIGxhbmcgPSBmbGFnQ3VyLnRvVXBwZXJDYXNlKCk7XHJcblxyXG4gICAgJCgnLmZsYWctZHJvcF9fbGFuZycpLnRleHQobGFuZyk7XHJcblxyXG4gICAgZmxhZ0N1ciA9ICdmbGFnLWRyb3BfX3NlbGVjdGVkLS0nICsgZmxhZ0N1cjtcclxuICAgICQoXCIuZmxhZy1kcm9wX19zZWxlY3RlZFwiKS5hZGRDbGFzcyhmbGFnQ3VyKTtcclxufSk7XHJcbi8vQ2hhbmdlIGxhbmcgYnV0dG9uc1xyXG5cclxuJChcIi5mbGFnLWRyb3BfX3NlbGVjdGVkXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcclxuICAgICQoXCIuZmxhZy1kcm9wX19saXN0XCIpLnRvZ2dsZSgpO1xyXG59KVxyXG5cclxuJChcIi5mbGFnLWRyb3BfX2l0ZW0tLWdyXCIpLm9uKFwiY2xpY2tcIixmdW5jdGlvbihlKXtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50RmxhZycsICdncicpO1xyXG4gICAgbG9jYXRpb24ucmVsb2FkKHRydWUpO1xyXG59KTtcclxuXHJcbiQoXCIuZmxhZy1kcm9wX19pdGVtLS1jeVwiKS5vbihcImNsaWNrXCIsZnVuY3Rpb24oZSl7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudEZsYWcnLCAnY3knKTtcclxuICAgIGxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcclxufSk7XHJcblxyXG4vL1Nob3cvaGlkZSBsb2dpbiBidXR0b25zXHJcbiQoXCIjc2lnbkJ1dHRvblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICAkKFwiI2xvZ2luQmxvY2tcIikuc2xpZGVUb2dnbGUoMjAwKTtcclxufSkiXX0=
