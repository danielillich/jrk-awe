// This endpoint handles individual participant check-in status updates
export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method === 'POST') {
        try {
            const { id } = req.query;
            const { status, user } = req.body;
            
            if (!id || !status || !user) {
                return res.status(400).json({ error: 'Missing required parameters' });
            }

            console.log(`Check-in status update: Participant ${id} set to ${status} by ${user}`);
            
            res.status(200).json({ 
                success: true, 
                message: 'Status updated successfully',
                participantId: id,
                status: status,
                timestamp: new Date().toISOString()
            });
        } catch (error) {
            console.error('Error updating check-in status:', error);
            res.status(500).json({ error: 'Failed to update status' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
