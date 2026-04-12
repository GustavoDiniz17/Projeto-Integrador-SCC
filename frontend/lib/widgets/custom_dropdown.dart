import 'package:flutter/material.dart';

class CustomDropdown extends StatelessWidget {
  final String labelText;
  final List<DropdownMenuItem> items;
  final IconData prefixIcon;
  final dynamic initialValue;
  final void Function(dynamic)? onChanged;

  const CustomDropdown({
    required this.items,
    this.onChanged,
    this.labelText = '',
    this.prefixIcon = Icons.abc,
    this.initialValue,
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: DropdownButtonFormField(
        isExpanded: true,
        initialValue: initialValue,
        decoration: InputDecoration(
          labelText: labelText,
          prefixIcon: Icon(prefixIcon, color: Color(0xFF6750A4)),
          enabledBorder: OutlineInputBorder(
            borderSide: BorderSide(color: Color(0xFF6750A4)),
          ),
          border: OutlineInputBorder(
            borderSide: BorderSide(color: Color(0xFF6750A4)),
          ),
        ),
        items: items,
        onChanged: onChanged,
      ),
    );
  }
}
