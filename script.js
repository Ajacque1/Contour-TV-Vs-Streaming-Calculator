// List of streaming service dropdown IDs
const streamingServices = [
    { id: "netflix", name: "Netflix" },
    { id: "hulu", name: "Hulu" },
    { id: "paramountPlus", name: "Paramount Plus" },
    { id: "Peacock", name: "Peacock"}, 
    // Add new services here as { id: "dropdownID", name: "Service Name" }
];

// Function to calculate costs
function calculateCosts() {
    // Calculate total streaming cost
    const totalStreaming = streamingServices.reduce((total, service) => {
        const cost = parseFloat(document.getElementById(service.id)?.value) || 0;
        return total + cost;
    }, 0);

    // Fetch internet and cable costs
    const internet = parseFloat(document.getElementById("internet").value) || 0;
    const cable = parseFloat(document.getElementById("cable").value) || 0;

    // Final totals
    const finalStreamingCost = totalStreaming + internet;
    const totalCable = cable;

    // Display results
    const resultDiv = document.getElementById("result");
    resultDiv.style.display = "block";
    resultDiv.innerHTML = `
        <p>Total Streaming Cost: $${finalStreamingCost.toFixed(2)} / month</p>
        <p>Total Cable Cost: $${totalCable.toFixed(2)} / month</p>
        <p><strong>${finalStreamingCost < totalCable ? 'Streaming' : 'Cable'} is cheaper by $${Math.abs(finalStreamingCost - totalCable).toFixed(2)} per month.</strong></p>
    `;
}
