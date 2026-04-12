import 'package:flutter/material.dart';

class CardData {
  final String title;
  final String value;
  final String context;
  final Color color;
  final IconData icon;

  CardData({
    required this.title,
    required this.value,
    required this.context,
    required this.color,
    required this.icon,
  });
}

class StatCard extends StatelessWidget {
  final CardData data;

  const StatCard({super.key, required this.data});

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 4.0,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12.0)),
      child: Padding(
        padding: const EdgeInsets.all(24.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: <Widget>[
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(
                  data.title.toUpperCase(),
                  style: TextStyle(
                    fontSize: 12,
                    fontWeight: FontWeight.w600,
                    color: Colors.grey.shade600,
                    letterSpacing: 0.5,
                  ),
                ),
                Icon(data.icon, color: data.color, size: 24),
              ],
            ),
            const SizedBox(height: 16.0),
            Text(
              data.value,
              style: const TextStyle(
                fontSize: 36,
                fontWeight: FontWeight.bold,
                color: Colors.black87,
              ),
            ),
            const SizedBox(height: 8.0),
            Text(
              data.context,
              style: TextStyle(
                fontSize: 14,
                color:
                    data.context.contains('+') ||
                        data.context.contains('Redução')
                    ? Colors.green.shade500
                    : Colors.pink.shade600,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
