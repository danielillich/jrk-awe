let participants = [];

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
            const { participants: newParticipants, user, forceUpdate, timestamp } = req.body;
            
            if (!newParticipants || !Array.isArray(newParticipants)) {
                return res.status(400).json({ error: 'Invalid participants data' });
            }

            // Force update for new Excel uploads
            participants = newParticipants;
            
            console.log(`Excel data uploaded by ${user} at ${timestamp}: ${participants.length} entries`);
            
            res.status(200).json({ 
                success: true, 
                message: 'Excel data uploaded successfully',
                count: participants.length,
                timestamp: new Date().toISOString()
            });
        } catch (error) {
            console.error('Error uploading data:', error);
            res.status(500).json({ error: 'Failed to upload data' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}