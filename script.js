// List of streaming service dropdown IDs
const streamingServices = [
    { id: "netflix", name: "Netflix" },
    { id: "hulu", name: "Hulu" },
    { id: "paramountPlus", name: "Paramount Plus" },
    { id: "peacock", name: "Peacock" }
];

// Function to calculate costs
function calculateCosts() {
    console.log("Calculating costs...");

    // Calculate total streaming cost
    const totalStreaming = streamingServices.reduce((total, service) => {
        const element = document.getElementById(service.id);
        if (!element) {
            console.warn(`Element with ID ${service.id} not found.`);
            return total;
        }
        const cost = parseFloat(element.value) || 0;
        console.log(`${service.name} Cost:`, cost);
        return total + cost;
    }, 0);

    // Fetch internet and cable costs
    const internet = parseFloat(document.getElementById("internet").value) || 0;
    const cable = parseFloat(document.getElementById("cable").value) || 0;

    console.log("Internet Cost:", internet);
    console.log("Cable Cost:", cable);

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
