import 'package:flutter/material.dart';

class CustomDatagrid extends StatelessWidget {
  final Widget child;

  const CustomDatagrid({this.child = const SizedBox.shrink(), super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 8.0),
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
        decoration: BoxDecoration(
          color: Color(0xFF6750A4),
          borderRadius: BorderRadius.circular(8),
        ),
        child: child,
      ),
    );
  }
}
