import 'package:flutter/material.dart';

class CustomLoadingIndicator extends StatelessWidget {
  final double? width;
  final double? height;

  const CustomLoadingIndicator({this.height, this.width, super.key});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: SizedBox(
        width: width,
        height: height,
        child: const CircularProgressIndicator(color: Color(0xFF6750A4)),
      ),
    );
  }
}
