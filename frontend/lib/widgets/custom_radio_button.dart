import 'package:flutter/material.dart';

class CustomRadioButton extends StatefulWidget {
  final void Function(int index, dynamic itemValue)? onChanged;
  final List<CustomRadioButtonItem> itens;
  final Axis direction;
  final Color? selectedColor;
  final dynamic selectedItemValue;

  const CustomRadioButton({
    this.itens = const [],
    this.onChanged,
    this.direction = Axis.horizontal,
    this.selectedColor,
    this.selectedItemValue,
    super.key,
  });

  @override
  State<CustomRadioButton> createState() => _CustomRadioButtonState();
}

class CustomRadioButtonItem {
  final Widget display;
  final dynamic value;

  CustomRadioButtonItem({this.value, this.display = const SizedBox.shrink()});
}

class _CustomRadioButtonState extends State<CustomRadioButton> {
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(8.0),
      height: 66,
      child: Container(
        decoration: BoxDecoration(
          border: Border.fromBorderSide(
            const BorderSide(color: Color(0xFF6750A4)),
          ),
          borderRadius: BorderRadius.circular(5),
        ),
        child: ListView.builder(
          scrollDirection: widget.direction,
          physics: const NeverScrollableScrollPhysics(),
          itemCount: widget.itens.length,
          shrinkWrap: true,
          padding: EdgeInsets.zero,
          itemBuilder: (context, index) {
            return Padding(
              padding: const EdgeInsets.all(4.0),
              child: InkWell(
                child: Container(
                  padding: const EdgeInsets.all(8.0),
                  alignment: Alignment.center,
                  decoration: BoxDecoration(
                    color: widget.itens[index].value == widget.selectedItemValue
                        ? Color(0xFF6750A4)
                        : Colors.transparent,
                    borderRadius: BorderRadius.circular(5),
                  ),
                  child: widget.itens[index].display,
                ),
                onTap: () {
                  if (widget.onChanged != null) {
                    widget.onChanged!(index, widget.itens[index].value);
                  }
                },
              ),
            );
          },
        ),
      ),
    );
  }
}
