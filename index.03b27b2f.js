document.querySelectorAll("form input").forEach(function(e){var t=document.createElement("label");t.classList.add("field-label"),t.setAttribute("for",e.id),e.insertAdjacentElement("afterend",t);var a=e.name.replace(/([a-z])([A-Z])/g,"$1 $2").trim(),r=a.charAt(0).toUpperCase()+a.slice(1);e.setAttribute("placeholder",r),t.textContent=r,e.parentElement.appendChild(t)});
//# sourceMappingURL=index.03b27b2f.js.map