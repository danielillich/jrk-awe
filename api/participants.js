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
            const { participants: newParticipants, user } = req.body;
            
            if (!newParticipants || !Array.isArray(newParticipants)) {
                return res.status(400).json({ error: 'Invalid participants data' });
            }

            // Update participants data
            participants = newParticipants;
            
            console.log(`Participants updated by ${user}: ${participants.length} entries`);
            
            res.status(200).json({ 
                success: true, 
                message: 'Participants saved successfully',
                count: participants.length 
            });
        } catch (error) {
            console.error('Error saving participants:', error);
            res.status(500).json({ error: 'Failed to save participants' });
        }
    } else if (req.method === 'GET') {
        try {
            res.status(200).json(participants);
        } catch (error) {
            console.error('Error getting participants:', error);
            res.status(500).json({ error: 'Failed to get participants' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}