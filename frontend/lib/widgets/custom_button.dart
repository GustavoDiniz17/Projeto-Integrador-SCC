import 'package:flutter/material.dart';

class CustomButton extends StatelessWidget {
  final Widget label;
  final Widget icon;
  final double? width;
  final Color? backgroundColor;
  final void Function()? onPressed;

  const CustomButton({
    required this.label,
    required this.icon,
    this.width,
    required this.onPressed,
    this.backgroundColor,
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(8.0),
      width: width,
      child: FilledButton.icon(
        icon: icon,
        label: label,
        style: FilledButton.styleFrom(backgroundColor: backgroundColor),
        onPressed: onPressed,
      ),
    );
  }
}
