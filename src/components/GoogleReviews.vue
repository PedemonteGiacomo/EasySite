<template>
  <div id="trustmary"></div>
</template>

<script>
export default {
  mounted() {
    // Dynamically add Trustmary script tag to the document
    this.addTrustmaryScript();
  },
  methods: {
    addTrustmaryScript() {
      // Create script element for Trustmary widget
      const script = document.createElement('script');
      script.src = 'https://widget.trustmary.com/X6xhp1Y1h';

      // Append the script to the document's body or head
      //document.body.appendChild(script); // or document.head.appendChild(script);
      document.getElementById('trustmary').appendChild(script);

      // Initialize Trustmary widget after the script is loaded (might need some delay)
      script.onload = () => {
        this.initTrustmaryWidget();
      };
    },
    initTrustmaryWidget() {
      // Trigger the Trustmary widget creation
      // This assumes Trustmary widget has a specific method to initialize it, replace with correct code if needed
      window.TrustmaryWidget?.initWidget({
        target: '#trustmary-widget', // The element to attach the widget to
        // Other configuration options as needed for Trustmary widget initialization
      });
    },
  },
  name: 'GoogleReviews',
}
</script>
