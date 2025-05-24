public class AgentModel
{
    public string Id { get; set; } = "";
    public string Label { get; set; } = "";
    public List<string> DependsOn { get; set; } = new(); // ✅ FIX
    public string Status { get; set; } = "pending";
    public int Progress { get; set; } = 0;
}
