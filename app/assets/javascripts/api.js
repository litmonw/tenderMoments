//= require_tree ../../../vendor/assets/javascripts/swagger-ui/.

window.onload = function() {
  // Build a system
  const ui = SwaggerUIBundle({
    url: "/api/swagger_doc",
    validatorUrl: null,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  })

  window.ui = ui
}